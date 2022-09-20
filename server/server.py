from datetime import datetime

from flask import Flask, abort, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Boolean, Column, DateTime, Integer, String

# SETUP
app = Flask(__name__)
CORS(app)



# MODELS
class Monitor():
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    numero = Column(String)
    exp=  Column(String)
    info = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime, default=datetime.now)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "numero": self.numero,
            "exp": self.exp if self.exp else '-',
            "completed": self.completed if self.completed else False,
            "created_at": int(datetime.timestamp(self.created_at)),
        }


# ROUTES
@app.route("/monitores", methods=["GET", "POST"])
def monitor():
    if request.method == "GET":
        # Return all todos if get
        print('nothing to show')

    elif request.method == "POST":
        # Create new todo record if POST
        json = request.get_json()

        # Check required fields
        if "numero" not in json:
            abort(400, "Missing required fields.")

        # Send to csv
        
        return json


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
