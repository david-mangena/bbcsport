const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const {
  merge
} = require('mochawesome-merge');
const {
  create
} = require('mochawesome-report-generator');
const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
  on('after:run', async (results) => {
    const reportDir = path.resolve(__dirname, '..', 'reports');
    const mergedReportFile = path.join(reportDir, 'mochawesome.json');
    const generatedReportDir = path.join(reportDir, 'html');

    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir);
    }

    // Generate a merged JSON report
    await merge({
      files: [`${reportDir}/*.json`],
      outputDir: reportDir,
    });

    // Generate an HTML report
    await create({
      reportDir: generatedReportDir,
      reportTitle: 'Cypress Automated Tests',
      inlineAssets: true,
      overwrite: true,
      reportJsonFile: mergedReportFile,
    });

    // Copy screenshots and videos to the generated report directory
    fs.copySync(path.join(reportDir, '..', 'screenshots'), path.join(generatedReportDir, 'assets/screenshots'));
    fs.copySync(path.join(reportDir, '..', 'videos'), path.join(generatedReportDir, 'assets/videos'));
  });

  addMatchImageSnapshotPlugin(on, config);

  return config;
};
