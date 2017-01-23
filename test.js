var app = angular.module("todo",[]);
app.controller('todoController',function(){
	
	this.todos = [
		{
			'title':'Build a todo app',
			'done':false
		}
	];

	this.addTodo = function(){
		this.todos.push({'title':this.newtodo,'done':false});
		this.newtodo = '';
	};

	this.clearCompleted = function(){
		this.todos = this.todos.filter(function(val){
			return !val.done;
		})
	};

});