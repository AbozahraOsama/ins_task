angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchTerm = '';
  homePageVm.loading = false;
  homePageVm.noMorePages = false;
  homePageVm.currentPage = 1;
  homePageVm.totalPagesCount = 0;

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }

  homePageVm.loadMore = () => {
    homePageVm.loading = true;
    Employees.loadMoreEmployees(homePageVm.currentPage)
      .then(({ data }) => {
        homePageVm.loading = false;
        homePageVm.currentPage++;
        homePageVm.totalPagesCount = data.pages;

        homePageVm.employees = homePageVm.employees.concat(data.employees);

        if (homePageVm.currentPage > homePageVm.totalPagesCount) {
          homePageVm.noMorePages = true;
        }
      });
  };

  homePageVm.searchTermHandler = (e) => {
    homePageVm.searchTerm = e;
  };
}
