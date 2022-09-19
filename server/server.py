from datetime import datetime

from flask import Flask, abort, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Boolean, Column, DateTime, Integer, String

# SETUP
app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///todos.sqlite3"
app.config["SECRET_KEY"] = "secret"
db = SQLAlchemy(app)


# MODELS
class Todo(db.Model):
    __tablename__ = "todos"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(String)
    completed = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime, default=datetime.now)

    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description if self.description else "",
            "completed": self.completed if self.completed else False,
            "created_at": int(datetime.timestamp(self.created_at)),
        }


# ROUTES
@app.route("/todos", methods=["GET", "POST"])
def todos():
    if request.method == "GET":
        # Return all todos if get
        todos = db.session.query(Todo).all()
        return jsonify(list(map(lambda t: t.to_json(), todos)))

    elif request.method == "POST":
        # Create new todo record if POST
        json = request.get_json()

        # Check required fields
        if "title" not in json:
            abort(400, "Missing required fields.")

        # Create todo
        new_todo = Todo()
        new_todo.title = json["title"]
        new_todo.description = json.get("description")
        db.session.add(new_todo)
        db.session.commit()
        return jsonify(new_todo.to_json())


@app.route("/todos/<int:id>", methods=["GET", "PATCH", "DELETE"])
def todo(id):
    # Get current todo
    todo = db.session.query(Todo).get(id)
    if not todo:
        abort(404, "Can't find todo item")

    if request.method == "GET":
        # Serialize if GET
        return jsonify(todo.to_json())

    elif request.method == "PATCH":
        # Update fields if PATCH
        json = request.get_json()
        updateable_fields = ["title", "description", "completed"]
        for field in updateable_fields:
            if field in json:
                setattr(todo, field, json[field])
        db.session.commit()
        return jsonify(todo.to_json())

    elif request.method == "DELETE":
        # Delete task
        db.session.delete(todo)
        db.session.commit()
        return "Success"


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
