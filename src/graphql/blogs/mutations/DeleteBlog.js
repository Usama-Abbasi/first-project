const graphql=require('graphql');
const {GraphQLString,GraphQLNonNull}=graphql;
const Blog=require('./..//model/blog');
const BlogType=require('./..//BlogType');
exports.deleteBlog={
    type:BlogType,
    args:{
        id:{type:new GraphQLNonNull(graphql.GraphQLID)},
    },
    resolve:async (parent,args)=>{
        const deleteBlog=await Blog.findByIdAndRemove(args.id);
        if(!deleteBlog){
            throw new Error('error');
        }
        return deleteBlog;
    }
}