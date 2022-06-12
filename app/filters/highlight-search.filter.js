angular.module('appModule').filter('highlight', ($sce) => {
  return (input, search) => {
    if (search !== '' && input.match(new RegExp(search, 'i'))) {
      let searchRegex = new RegExp(search, 'ig');

      return input.replace(searchRegex, (str) => {
        return $sce.trustAsHtml(`<mark>${str}</mark>`);
      });
    }
    return input;
  };
});
