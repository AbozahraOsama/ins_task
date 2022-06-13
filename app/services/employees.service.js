angular.module('appModule')
  .service('Employees', EmployeesService);

const employeesUrl = 'https://fe-task.getsandbox.com/employees';

function EmployeesService($http) {
  const getEmployees = () => {
    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = (page) => {
    return $http.get(`${employeesUrl}?page=${page}`);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
