var query=require('./query/BlogQuery').BlogQuery;
var mutation=require('./mutations/BlogMutations');
const graphql=require('graphql');
const {GraphQLObjectType,GraphQLSchema,}=graphql;

exports.BlogSchema=new GraphQLSchema({
    query: query,
    mutation: new GraphQLObjectType({
        name:'Mutation',
        fields:mutation
    })
})