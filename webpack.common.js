const path = require('path');

module.exports = {
  entry:  [
            './src/components/App.jsx',
            './src/components/JF_Header.jsx',
            './src/components/Landings/Containers/Lead.jsx',
            './src/components/Landings/Components/LeadCompany.jsx',
            './src/components/Landings/Components/FetchLeadCompany.jsx',
            './src/components/Users/Register.jsx',
            './src/components/Users/Login.jsx',
            './src/components/Users/ProfileAndGoals.jsx',
            './src/components/Messaging/Messaging.jsx',
            './src/components/CompanyResearch/Components/Profile/CompanyWholeProfile.jsx',
            './src/components/CompanyResearch/Components/Profile/CompanyCard.jsx',
            './src/components/CompanyResearch/Components/Profile/CompanyOverview.jsx',
            './src/components/CompanyResearch/Components/Profile/CompanyDeals.jsx',
            './src/components/CompanyResearch/Components/Profile/CompanySocialEngagement.jsx',
            './src/components/CompanyResearch/Components/Profile/CompanyMobileEngagement.jsx',
            './src/components/CompanyResearch/Components/Profile/CompanyWebEngagement.jsx',
            './src/components/CompanyResearch/Components/News/CompanyNews.jsx',
            './src/components/CompanyResearch/Components/Tech/CompanyTechstackProfile.jsx',
            './src/components/CompanyResearch/Components/Tech/CompanyTechstackSectionDetails.jsx',
            './src/components/CompanyResearch/Components/Contacts/CompanyContacts.jsx',
            './src/components/CompanyResearch/Components/Contacts/ContactCard.jsx',
            './src/components/CompanyResearch/Components/UserPerformance/CompanyResearchPerformanceData.jsx',
            './src/components/CompanyResearch/Errors/CompanyPropNotFound.jsx',
            './src/components/Dashboard/Dashboard.jsx',
            './src/components/Dashboard/Containers/Target.jsx',
            './src/components/Dashboard/Containers/ArchivedTarget.jsx',
            './src/components/Dashboard/Components/ViewCompanyModal.jsx',
            './src/components/Dashboard/Components/ViewJobFitModal.jsx',
            './src/components/JobFit/HomeworkPicker.jsx',
            './src/components/JobFit/JobType/ProductManagement.jsx',
            './src/components/JobBoard/JobBoard.jsx',
            './src/components/JobBoard/Search/Container/JobSearchBox.jsx',
            './src/components/JobBoard/Search/Container/GetZipRecruiter.jsx',
            './src/components/JobBoard/Search/Component/DisplayOneJob.jsx',
            './src/components/JobBoard/Saved/Container/GetSavedJobs.jsx',
            './src/components/JobBoard/Saved/Component/DisplayOneSavedJob.jsx',
            './src/index.js'
          ],
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  node: {
   fs: "empty"
  }
};