const aliases = (prefix = 'src') => ({
  '@src': `${prefix}`,
  '@c': `${prefix}/components`,
  '@components': `${prefix}/components`,
  '@ui': `${prefix}/components/UI`,
  '@helpers': `${prefix}/helpers`,
  '@services': `${prefix}/services`,
  '@config': `${prefix}/config`,
  '@styles': `${prefix}/sass`,
  '@store': `${prefix}/store`,
  '@api': `${prefix}/api`,
});

module.exports = aliases;
