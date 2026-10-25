// SVGO configuration for optimising SVG assets
// Run: npm run optimize:svg
export default {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox for scaling
          removeViewBox: false,
          // Keep IDs — sprites rely on symbol IDs
          cleanupIds: false,
        },
      },
    },
    // Remove XML processing instructions
    'removeXMLProcInst',
    // Remove comments
    'removeComments',
    // Remove metadata
    'removeMetadata',
    // Remove editor namespace data
    'removeEditorsNSData',
    // Collapse useless groups
    'collapseGroups',
    // Sort attributes for gzip compression
    'sortAttrs',
  ],
}
