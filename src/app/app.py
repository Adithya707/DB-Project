from flask import Flask,jsonify,request,render_template,redirect;
from flask_mysqldb import MySQL;
from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from flask_cors import CORS
import pymysql
import json

app = Flask(__name__)

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='qwerty'
app.config['MYSQL_DB']='flaskapp'
app.config['MYSQL_CURSORCLASS']='DictCursor'


mysql=MySQL(app)
api = Api(app)
CORS(app)



@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})

class BlogPage(Resource):
    def get(self):
       ud=[];
       cur= mysql.connection.cursor()
       resultVal=cur.execute("select *from bl");
       ud = cur.fetchall()
       return jsonify(ud);
     
         
     

                 
class ArticleDelete(Resource):
    def get(self, Article_id):
       cur=mysql.connection.cursor()
       resultval=cur.execute("delete from bl where id=%s",[Article_id])
       mysql.connection.commit();
       cur=mysql.connection.cursor()
       resultval=cur.execute("delete from Rating where id=%s",[Article_id])
       mysql.connection.commit();
       cur=mysql.connection.cursor()
       resultval=cur.execute("delete from Price where id=%s",[Article_id])
       mysql.connection.commit();
       cur.close();

class ArticleDelete1(Resource):
    def get(self, Article_id):
       cur=mysql.connection.cursor()
       resultval=cur.execute("delete from Lap where id=%s",[Article_id])
       mysql.connection.commit();
       cur=mysql.connection.cursor()
       resultval=cur.execute("delete from RatingL where id=%s",[Article_id])
       mysql.connection.commit();
       cur=mysql.connection.cursor()
       resultval=cur.execute("delete from priceL where id=%s",[Article_id])
       mysql.connection.commit();
       cur.close();                 


class ArticleEdit(Resource):
    def get(self,idi,title,author,image,publishdate,excert):
         cur=mysql.connection.cursor()
         
         result=[]
         params=str(title), str(author), str(image), str(publishdate), str(excert), str(idi)
         query=cur.execute("""update bl set title= %s,author=%s ,image=%s ,publishdate=%s ,excert=%s where id =%s""",params)
         mysql.connection.commit()
         con=mysql.connection.cursor()
         con.execute("select * from bl where id="+str(idi))
         ud=con.fetchall()
         return jsonify(ud);


class ArticleEdit2(Resource):
    def get(self,idi,title,author,image,publishdate,excert):
         cur=mysql.connection.cursor()
         
         result=[]
         params=str(title), str(author), str(image), str(publishdate), str(excert), str(idi)
         query=cur.execute("""update Lap set title= %s,author=%s ,image=%s ,publishdate=%s ,excert=%s where id =%s""",params)
         mysql.connection.commit()
         con=mysql.connection.cursor()
         con.execute("select * from Lap where id="+str(idi))
         ud=con.fetchall()
         return jsonify(ud);

class ArticleCreate(Resource):
    def get(self,idi,title,author,image,publishdate,excert):
         cur=mysql.connection.cursor()
         
         result=[]
         params=str(idi), str(title), str(author), str(image), str(publishdate), str(excert)
         query=cur.execute("insert into bl values(%s,%s,%s,%s,%s,%s)",(params))
         mysql.connection.commit()
         con=mysql.connection.cursor()
         con.execute("select * from bl where id="+str(idi))
         ud=con.fetchall()
         return jsonify(ud);        

class ArticleEdit1(Resource):
    def get(self,idi):
        ud=[]
        cur=mysql.connection.cursor()
        res=cur.execute("select * from bl where id=%s",idi);
        ud=cur.fetchall()  
        mysql.connection.commit()
        return jsonify(ud)
         


class ArticleEdit3(Resource):
    def get(self,idi):
        ud=[]
        cur=mysql.connection.cursor()
        res=cur.execute("select * from Lap where id=%s",idi);
        ud=cur.fetchall()  
        mysql.connection.commit()
        return jsonify(ud)
         
class ArticleEdit4(Resource):
    def post(self):
        ud=[]
        cur=mysql.connection.cursor()
        response_data = json.loads(request.data)
        result = response_data.get('email')
         
        print(type(str(result))) 
        params=str(response_data.get('email')), str(response_data.get('firstName')), str(response_data.get('lastName')), str(response_data.get('password'))
        res=cur.execute("insert into user values(%s,%s,%s,%s)",(params))
        ud=cur.fetchall()
        
        mysql.connection.commit()
        return jsonify(ud)

class Articlefind(Resource):
    def get(self, Article_id,title,author,image,publishdate,excert,price,comp_id):
       cur=mysql.connection.cursor()
       params=[str(Article_id)] ,[str(title)] ,[str(author)] ,[str(image)] ,[str(publishdate)] ,[str(excert)] ,[str(price)] ,[str(comp_id)]
       resultval=cur.execute("insert into bl values(%s,%s,%s,%s,%s,%s,%s,%s)",params)
       mysql.connection.commit()
       cur.close()       

class Articlefind1(Resource):
    def get(self,Article_id,title,author,image,publishdate,excert,price,comp_id):
       cur=mysql.connection.cursor()
       params=[str(Article_id)] ,[str(title)] ,[str(author)] ,[str(image)] ,[str(publishdate)] ,[str(excert)] ,[str(price)] ,[str(comp_id)]
       resultval=cur.execute("insert into Lap values(%s,%s,%s,%s,%s,%s,%s,%s)",(params))
       mysql.connection.commit()
       cur.close()

class BlogPage1(Resource):
    def get(self):
       ud=[];
       cur = mysql.connection.cursor()
       resultVal=cur.execute("select *from Lap");
       ud = cur.fetchall()
       return jsonify(ud);  


class ArticleRate(Resource):
    def get(self,id,author,rating,comp):
        cur=mysql.connection.cursor()
        cu=mysql.connection.cursor()
        p=[str(id)]
        param=cu.execute("select iNum from Price where id=%s",p)
        a=cu.fetchall()[0]
        c=a['iNum']
       
        params = [str(id)] ,[str(author)], [str(rating)], [str(comp)] ,[str(c)]
        
        
       
        resultVal=cur.execute("insert into Rating values(%s,%s,%s,%s,%s)",params)
      
       
        mysql.connection.commit()
        cur.close()
        cu.close()

class ArticleRate1(Resource):
    def get(self,id,author,rating,comp):
        cur=mysql.connection.cursor()
        cu=mysql.connection.cursor()
        p=[str(id)]
        param=cu.execute("select iNum from priceL where id=%s",p)
        a=cu.fetchall()[0]
        c=a['iNum']
        params = [str(id)] ,[str(author)], [str(rating)], [str(comp)], [str(c)]
        resultVal=cur.execute("insert into RatingL values(%s,%s,%s,%s,%s)",params)
        mysql.connection.commit()
        cur.close()
        cu.close()

api.add_resource(BlogPage1,'/Blog1') # Route_1
api.add_resource(BlogPage,'/Blog') # Route_1
api.add_resource(ArticleDelete,'/Blog/article-delete/<string:Article_id>') # Route_1
api.add_resource(ArticleEdit,'/Blog/article-edit/<string:idi>/<string:title>/<string:author>/<string:image>/<string:publishdate>/<string:excert>') # Route_1
api.add_resource(ArticleEdit1,'/Blog/article/<string:idi>')
api.add_resource(ArticleRate,'/Blog/article-rate/<string:id>/<string:author>/<string:rating>/<string:comp>')
api.add_resource(ArticleRate1,'/Blog1/article-rate/<string:id>/<string:author>/<string:rating>/<string:comp>')
api.add_resource(Articlefind,'/Blog/article-buy/<string:Article_id>/<string:title>/<string:author>/<string:image>/<string:publishdate>/<string:excert>/<string:price>/<string:comp_id>') 
api.add_resource(ArticleCreate,'/Blog/article-create/<string:idi>/<string:title>/<string:author>/<string:image>/<string:publishdate>/<string:excert>') 

api.add_resource(ArticleDelete1,'/Blog1/article-delete/<string:Article_id>') # Route_1
api.add_resource(ArticleEdit2,'/Blog1/article-edit/<string:idi>/<string:title>/<string:author>/<string:image>/<string:publishdate>/<string:excert>') # Route_1
api.add_resource(ArticleEdit3,'/Blog1/article/<string:idi>')
api.add_resource(Articlefind1,'/Blog1/article-buy/<string:Article_id>/<string:title>/<string:author>/<string:image>/<string:publishdate>/<string:excert>/<string:price>/<string:comp_id>') 
#api.add_resource(ArticleCreate1,'/Blog1/article-create/<string:idi>/<string:title>/<string:author>/<string:image>/<string:publishdate>/<string:excert>') 
api.add_resource(ArticleEdit4,'/Home(popup:contactus)')

if __name__ == '__main__':
   app.run(port=5002,debug=True)