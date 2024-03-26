from flask import Flask, request, redirect, url_for, send_from_directory, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'portfolio'
mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('static/css', filename)

@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('static/js', filename)

@app.route('/add_experience', methods=['POST'])
def add_experience():
    if request.method == 'POST':
        job_title = request.form['job_title']
        company_name = request.form['company_name']
        dates_employment = request.form['dates_employment']
        location = request.form['location']
        responsibilities = request.form['responsibilities']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO work_experience (job_title, company_name, dates_employment, location, responsibilities) VALUES (%s, %s, %s, %s, %s)", (job_title, company_name, dates_employment, location, responsibilities))
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('index'))

@app.route('/add_skills', methods=['POST'])
def add_skills():
    if request.method == 'POST':
        technical_skills = request.form['technical_skills']
        soft_skills = request.form['soft_skills']
        
        language_proficiency = request.form['language_proficiency']
        certifications = request.form['certifications']
        creative_skills = request.form['creative_skills']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO skills (technical_skills, soft_skills, language_proficiency, certifications, creative_skills) VALUES (%s, %s, %s, %s, %s)", (technical_skills, soft_skills, language_proficiency, certifications, creative_skills))
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
    
