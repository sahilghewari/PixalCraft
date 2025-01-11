import React, { useEffect, useRef } from "react";
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';

const GrapeJSEditor = () => {

// ... inside your React component
return (
  <div className="h-screen flex flex-col">
    <StudioEditor
      className="flex-1"
      options={{
        licenseKey: '7900dc5163b2453a9c68d04c129a4cd6c17185a51fb9451d8c0e24ed96634ed2',
        project: {
          type: 'web',
          // TODO: replace with a unique id for your projects. e.g. an uuid
          id: 'UNIQUE_PROJECT_ID'
        },
        identity: {
          // TODO: replace with a unique id for your end users. e.g. an uuid
          id: 'UNIQUE_END_USER_ID'
        },
        assets: {
          storageType: 'cloud'
        },
        storage: {
          type: 'cloud',
          autosaveChanges: 100,
          autosaveIntervalMs: 10000
        }
      }}
    />
  </div>
);
};

export default GrapeJSEditor;
