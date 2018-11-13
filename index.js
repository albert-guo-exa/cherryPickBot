/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  //
  app.log('Yay, the app was loaded!')
  // This listens to when a pull request is merged
  app.on('pull_request.opened', async context => {
    //Find Branch
    const assigned_folks = ["guozhaonan", "albert-guo-exa"];
    const assigneesBody = context.issue({
      assignees: assigned_folks
    });
    return context.github.issues.addAssignees(assigneesBody);
  })
  // This was the default action I used to test that the Probot was working, currently works
  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' });
    return context.github.issues.createComment(issueComment);
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
