module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  // Copy favicon to root for Safari compatibility
  eleventyConfig.addPassthroughCopy({ "src/images/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/images/favicon-32x32.png": "favicon-32x32.png" });
  eleventyConfig.addPassthroughCopy({ "src/images/favicon-16x16.png": "favicon-16x16.png" });
  eleventyConfig.addPassthroughCopy({ "src/images/apple-touch-icon.png": "apple-touch-icon.png" });

  // Add date filter for formatting dates
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Add limit filter to limit array length
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // Add collection for sermons (sorted by date, newest first)
  eleventyConfig.addCollection("sermons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/sermons/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Add collection for events (sorted by date, newest first)
  eleventyConfig.addCollection("events", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/events/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
