from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')
# app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY")
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///notes.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


##Cafe TABLE Configuration
class NoteApp(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), nullable=True)
    content = db.Column(db.TEXT, nullable=True)
    strike = db.Column(db.Boolean, nullable=True)

    def to_dict(self):
        dictionary = {}
        # Loop through each column in the data record
        for column in self.__table__.columns:
            dictionary[column.name] = getattr(self, column.name)
        return dictionary


db.create_all()


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route("/all")
def all_notes():
    notes = db.session.query(NoteApp).all()
    return jsonify(notes=[note.to_dict() for note in notes])


@app.route("/add", methods=["POST"])
def post_new_note():
    note = json.loads(request.data)
    new_cafe = NoteApp(
        title=note["title"],
        content=note["content"]
    )
    db.session.add(new_cafe)
    db.session.commit()
    return jsonify({"success": "Successfully added the note."})


@app.route("/delete/<note_id>", methods=["DELETE"])
def delete_note(note_id):
    cafe = db.session.query(NoteApp).get(note_id)
    db.session.delete(cafe)
    db.session.commit()
    return jsonify({"success": "Successfully deleted the note."})


@app.route("/strike/<note_id>", methods=["PUT"])
def strike_note(note_id):
    cafe = db.session.query(NoteApp).get(note_id)
    cafe.strike = not cafe.strike
    db.session.commit()
    return jsonify({"success": "Successfully changed the strike."})


if __name__ == '__main__':
    app.run(debug=True)
