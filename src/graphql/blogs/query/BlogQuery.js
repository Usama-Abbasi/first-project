const Blog=require('./..//model/blog');
const graphql=require('graphql');
const {GraphQLObjectType,GraphQLID,GraphQLList}=graphql;
const BlogType=require('../BlogType');
exports.BlogQuery=new GraphQLObjectType({
    name:'Query',
    fields:{
        blogs:{
            type:new GraphQLList(BlogType),
            resolve:async(parent,args)=>{
                const blogs=await Blog.find({})
                if(!blogs){
                    throw new Error('error while fetching data')
                }
                return blogs;
            }

        },
        blog:{
            type:BlogType,
            args:{id:{type:GraphQLID}},
            resolve:async(parent,args)=>{
                const blog=await Blog.findById(args.id);
                if(!blog){
                    throw new Error('error while fetching data')
                }
                return blog;
            }
        }
    }
})