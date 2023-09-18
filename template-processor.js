'use strict';
function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
  var filledTemplate = this.template.replace(/{{(.*?)}}/g, function (match, property) {
    return dictionary[property] || '';
  });

  return filledTemplate;
};
