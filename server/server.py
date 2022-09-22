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
class Aluno():
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    numero = Column(String)
    obj=  Column(String)
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
def monitores():
    if request.method == "GET":
        # Return all todos if get
        monitores = db.session.query(Monitor).all()
        return jsonify(list(map(lambda t: t.to_json(), monitores)))

    elif request.method == "POST":
        # Create new todo record if POST
        json = request.get_json()

        # Check required fields
        if "numero" not in json:
            abort(400, "Missing required fields.")

        # Create todo
        new_todo = Monitor()
        new_todo.name = json.get(["name"])
        new_todo.numero = json.get("numero")
        new_todo.exp = json.get("exp")
        db.session.add(new_todo)
        db.session.commit()
        return jsonify(new_todo.to_json())
        
       
@app.route("/alunos", methods=["GET", "POST"])
def alunos():
    if request.method == "GET":
        # Return all todos if get
        alunos = db.session.query(Aluno).all()
        return jsonify(list(map(lambda t: t.to_json(), alunos)))

    elif request.method == "POST":
        # Create new todo record if POST
        json = request.get_json()

        # Check required fields
        if "numero" not in json:
            abort(400, "Missing required fields.")

        # Create todo
        new_todo = Monitor()
        new_todo.name = json.get(["name"])
        new_todo.numero = json.get("numero")
        new_todo.obj = json.get("obj")
        db.session.add(new_todo)
        db.session.commit()
        return jsonify(new_todo.to_json())
        
      
@app.route("/monitor/<int:id>", methods=["GET", "PATCH"])
def monitor(id):
    # Get current todo
    monitor = db.session.query(Monitor).get(id)
    if not monitor:
        abort(404, "Can't find todo item")

    if request.method == "GET":
        # Serialize if GET
        return jsonify(monitor.to_json())

    elif request.method == "PATCH":
        # Update fields if PATCH
        json = request.get_json()
        updateable_fields = ["name", "numero", "info"]
        for field in updateable_fields:
            if field in json:
                setattr(monitor, field, json[field])
        db.session.commit()
        return jsonify(monitor.to_json())

@app.route("/aluno/<int:id>", methods=["GET", "PATCH"])
def aluno(id):
    # Get current todo
    aluno = db.session.query(Aluno).get(id)
    if not aluno:
        abort(404, "Can't find todo item")

    if request.method == "GET":
        # Serialize if GET
        return jsonify(aluno.to_json())

    elif request.method == "PATCH":
        # Update fields if PATCH
        json = request.get_json()
        updateable_fields = ["name", "numero", "info"]
        for field in updateable_fields:
            if field in json:
                setattr(aluno, field, json[field])
        db.session.commit()
        return jsonify(aluno.to_json())

""""
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
"""

if __name__ == "__main__":
    #db.create_all()
    app.run(debug=True)
