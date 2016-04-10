<div class="skills" ng-controller="skillsController">
	<img class="me" src="img/homepage/vanessa.jpg" alt="vanessa henson"/>
	<h2>SKILLS I BRING TO YOU</h2>
	<div class="skill-lists">
		<ul ng-repeat="skillList in skills">
		<li ng-repeat="skill in skillList">
		{{ skill }}
		</li>
		</ul>
	</div>
	<div class="toggle-button" ng-show="highlights" ng-click="showSection( 'highlight-toggle', 'highlights' )" class="highlight-toggle" ><span>View</span> Highlights</div>
	<br/>
	<section>
		<div class="highlights slide-content">
			<div class="highlight-single" ng-repeat="highlight in highlights">
				<div class="name">{{ highlight.name }}</div>
				<div class="description"> 
					<p ng-repeat="description in highlight.description" >{{ description }}</p>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="toggle-button" ng-show="education" ng-click="showSection( 'education-toggle', 'education' )" class="education-toggle"><span>View</span> Education</div>
		<br/>
			<div class="education slide-content">
				<div class="education-single" ng-repeat="edu in education">
					<div class="year ng-click=">{{ edu.year }}</div>
					<div class="field"> 
						<div ng-repeat="field in edu.field">{{ field }}</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>