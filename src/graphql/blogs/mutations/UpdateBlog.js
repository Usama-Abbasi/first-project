const graphql=require('graphql');
const {GraphQLString,GraphQLNonNull}=graphql;
const Blog=require('./..//model/blog');
const BlogType=require('./..//BlogType');
exports.updateBlog={
    type:BlogType,
    args:{
        id:{type:new GraphQLNonNull(graphql.GraphQLID)},
        title:{type:new GraphQLNonNull(GraphQLString)},
        description:{type:new GraphQLNonNull(GraphQLString)}
    },
    resolve:async (parent,args)=>{
        const updateBlog=await Blog.findByIdAndUpdate(args.id,args);
        if(!updateBlog){
            throw new Error('error');
        }
        return updateBlog;
    }
}