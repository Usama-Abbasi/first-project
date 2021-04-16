const Blog=require('../model/blog');
const graphql=require('graphql');
const {GraphQLString,GraphQLNonNull}=graphql;
const BlogType=require('../BlogType');
exports.addBlog={
    type:BlogType,
    args:{
        title:{type:new GraphQLNonNull(GraphQLString)},
        description:{type:new GraphQLNonNull(GraphQLString)}
    },
    resolve:async (parent,args)=>{
        const blog=new Blog(args);
        const newBlog=await blog.save();
        if(!newBlog){
            throw new Error('error');
        }
        return newBlog;
    }
}