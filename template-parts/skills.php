<div class="skills" ng-controller="skillsController">
	<h1>My Skills</h1>
	<ul>
	{{ splitSkills }}
	<li ng-repeat="skill in skills">
	{{ skill }}
	</li>
	</ul>

	<ul>
	<div ng-repeat="highlight in highlights">
		{{ highlight.name }}
		{{ highlight.description }}
	</div>

	<div ng-repeat="edu in education">
		{{ edu.year }}
		{{ edu.field }}

	</div>
	</ul>

</div>