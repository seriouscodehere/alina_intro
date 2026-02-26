export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Try to serve the asset
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) {
      return asset;
    }

    // Fallback to index.html for SPA routes
    return env.ASSETS.fetch(new Request(url.origin + "/index.html"));
  }
};
