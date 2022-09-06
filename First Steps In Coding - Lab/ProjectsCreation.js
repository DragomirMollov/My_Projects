function projectsCreation(input) {
  let nameArchitect = input[0];
  let projectCount = input[1];
  const timeForProject = 3;
  const timeTotal = projectCount * timeForProject;
  console.log(
    `The architect ${nameArchitect} will need ${timeTotal} hours to complete ${projectCount} project/s.`
  );
}

projectsCreation(["George ", "4 "]);
projectsCreation(["Sanya ", "9 "]);
