const graphql=require('graphql');
const {GraphQLObjectType,GraphQLString,GraphQLID,GraphQLSchema,GraphQLInt,GraphQLList, GraphQLNonNull}=graphql;
const BlogType=new GraphQLObjectType({
    name:'Blog',
    fields:()=>({
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        description:{type:GraphQLString}
    })
})
module.exports=BlogType;
