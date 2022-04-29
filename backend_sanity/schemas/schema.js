// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import testimonials from "./portfolio/testimonials";
import skills from "./portfolio/skills";
import brands from "./portfolio/brands";
import abouts from "./portfolio/abouts";
import workCategory from "./portfolio/workCategory";
import contact from "./portfolio/contact";
import works from "./portfolio/works";
import service from "./portfolio/service";
import experiences from "./portfolio/experiences";
import author from "./blog/author";
import blockContent from "./blog/blockContent";
import category from "./blog/category";
import post from "./blog/post";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    works,
    workCategory,
    testimonials,
    skills,
    service,
    contact,
    brands,
    abouts,
    experiences,
    author,
    blockContent,
    category,
    post,
  ]),
});
