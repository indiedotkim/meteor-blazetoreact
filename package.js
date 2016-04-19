Package.describe({
  name: 'thereactivestack:blazetoreact',
  version: '0.1.5',
  summary: 'Transform a Blaze template into a React.js component while keeping the reactivity',
  git: 'https://github.com/thereactivestack/meteor-blazetoreact.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['react@15.0.1']);
  api.use(['blaze@2.1.0'], 'client');

  api.add_files(['lib/BlazeToReact-client.jsx'], ['client']);
  api.add_files(['lib/BlazeToReact-server.jsx'], ['server']);

  api.export('BlazeToReact');
});
