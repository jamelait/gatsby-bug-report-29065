const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require("slugify")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  createPagesMdx(graphql, createPage)
}

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {}

/**
 * Create pages from .mdx files.
 */
createPagesMdx = async (graphql, createPage) => {
  const allMdxBlogPosts = await graphql(`
    {
      allMdx(filter: { frontmatter: { draft: { eq: false } } }) {
        nodes {
          parent {
            ... on File {
              relativePath
            }
          }
          frontmatter {
            title
            draft
          }
        }
      }
    }
  `)

  allMdxBlogPosts.data.allMdx.nodes.forEach(node => {
    const { relativePath } = node.parent
    const { title, draft } = node.frontmatter

    let component, path
    const slug = slugify(title.toLowerCase(), { lower: true, strict: true })
    switch (relativePath.split("/")[1]) {
      case "podcast":
        path = `podcast/${slug}`
        component = require.resolve("./src/templates/podcast-episode-mdx.tsx")
        break
    }

    createPage({
      path,
      component,
      context: {
        relativePath,
      },
    })
  })
}
