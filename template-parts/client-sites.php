<div class="projects" ng-controller="projectsController">
	<div class="xsmall-container">
		<h2>My Work</h2>
		<p>I have have been blessed to work on many high visiblity websites.  I always code to the highest standards and take pride in my work.  I strive to always go the extra mile to ensure every client is completely satisfied</p>
		<div  class="project" ng-repeat="project in projects">
			<img class="project-image" ng-src="{{ project.img }}" alt="{{ project.name }}" />
			<div ng-show="project.name" class="name">{{ project.name }}</div>
			<div class="description" >
				<div ng-show="project.info" class="info">{{ project.info }}</div>
				<div ng-show="project.description" class="description">{{ project.description }}</div>
				<a ng-show="project.url" href="{{ project.url }}" target="blank">{{ project.url }}</a>
			</div>
		</div>
	</div>
</div>