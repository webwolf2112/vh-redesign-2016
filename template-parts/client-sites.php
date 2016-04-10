<div class="projects" ng-controller="projectsController">
	<div class="small-container">
		<h2>My Work</h2>
		<p>I have have been blessed to work on many high visiblity websites.  I always code to the highest standards and take pride in my work.  I strive to always go the extra mile to ensure every client is completely satisfied</p>
		<div  class="project" ng-repeat="project in projects">
			<a ng-show="project.url" href="{{ project.url }}" target="blank">
				<img ng-src="{{ project.img }}" alt="{{ project.name }}"/>
			</a>
			<div class="description" >
				<div ng-show="project.name" class="name">{{ project.name }}</div>
				<div ng-show="project.info" class="info">{{ project.info }}</div>
				<a ng-show="project.url" href="{{ project.url }}" target="blank">{{ project.url }}</a>
				<div ng-show="project.description" class="description">{{ project.description }}</div>
			</div>
		</div>
	</div>
</div>