"use strict";
var Project = (function () {
    function Project(title, content, imageUrl, stack) {
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.stack = stack;
    }
    return Project;
}());
exports.Project = Project;
