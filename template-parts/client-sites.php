<div ng-controller="projectsController">
	<div ng-repeat="project in projects">
		<img ng-src="{{ project.img }}" alt="{{ project.imgAlt }}"/>
		<div ng-show="project.name" class="name">{{ project.name }}</div>
		<div ng-show="project.info" class="info">{{ project.info }}</div>
		<a ng-show="project.url" href="{{ project.url }}">{{ project.url }}</a>
		<div ng-show="project.description" class="description">{{ project.description }}</div>
	</div>
</div>