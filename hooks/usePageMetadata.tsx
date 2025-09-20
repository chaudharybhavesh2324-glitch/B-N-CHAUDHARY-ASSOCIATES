import React, { useEffect, useMemo } from 'react';

const SCRIPT_ID = 'structured-data';

const manageJsonLdScript = (jsonData: object) => {
  try {
    // FIX: Cast to HTMLScriptElement because getElementById returns a generic HTMLElement,
    // which does not have the 'type' property needed below.
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(jsonData);
  } catch (e) {
    console.error("Failed to inject JSON-LD", e);
  }
};

const removeJsonLdScript = () => {
  const script = document.getElementById(SCRIPT_ID);
  if (script) {
    script.remove();
  }
};

interface SEOProps {
  title: string;
  description: string;
  structuredData?: object | null;
}

export const usePageMetadata = ({ title, description, structuredData = null }: SEOProps) => {
  const structuredDataString = useMemo(() => structuredData ? JSON.stringify(structuredData) : null, [structuredData]);

  useEffect(() => {
    const defaultTitle = 'B N CHAUDHARY & ASSOCIATES';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;

    const metaDescriptionTag = document.getElementById('meta-description');
    if (metaDescriptionTag && description) {
      metaDescriptionTag.setAttribute('content', description);
    }
    
    if (structuredDataString) {
        manageJsonLdScript(JSON.parse(structuredDataString));
    }

    return () => {
      if (structuredDataString) {
        removeJsonLdScript();
      }
    };
  }, [title, description, structuredDataString]);
};
