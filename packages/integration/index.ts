import type { AstroIntegration } from "astro";
import mdx from "@astrojs/mdx";

export function testIntegration(): AstroIntegration {
  return {
    name: "test-integration",
    hooks: {
      "astro:config:setup": ({ config }) => {
        const integrations = [mdx({ optimize: true })];
        const selfIndex = config.integrations.findIndex(
          (i) => i.name === "test-integration"
        );
        config.integrations.splice(selfIndex + 1, 0, ...integrations);
      },
    },
  };
}
