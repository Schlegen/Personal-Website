from flask_frozen import Freezer
from app import *

freezer = Freezer(app)

@freezer.register_generator
def generate_project_urls():
    projects = get_static_json("static/projects/projects.json")['projects']
    for proj in projects:
        yield 'project', {'title': proj['link']}

if __name__ == '__main__':
    freezer.freeze()