module.exports = {
  // ...existing config...
  theme: {
    extend: {
      keyframes: {
        shrinkExpand: {
          "0%, 100%": { width: "100%" },
          "50%": { width: "25%" },
        },
      },
      animation: {
        shrinkExpand: "shrinkExpand 2s ease-in-out infinite",
      },
    },
  },
  // ...existing config...
};