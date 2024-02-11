
# Project Title

Meet Your Agents

## Description
Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games. 

There are 23 Valorant Agents. Each agent is unique in its own way. Main page can have multiple interactive player cards. Each designated to the agent that takes user into the agents information. 

Inspo : https://playvalorant.com/en-us/agents/ 

## Getting Started
### API 

* Endpoints: https://dash.valorant-api.com/
* Focus Endpoint: https://dash.valorant-api.com/endpoints/agents
* Actual API Database JSON : https://valorant-api.com/v1/agents


#### Inspo: 

Mario Characters: https://mario.nintendo.com/characters/

Valorant agents: https://playvalorant.com/en-us/agents/ 

LoL Champions: https://www.leagueoflegends.com/en-us/champions/


## Technologies Used: 
Carousel: slideshow component to cycle through the player cards. 

Modal: dialog box window that is displayed on top of the current page.

## Approaches Taken
Each card able to identify what character is being clicked on - and what information to push out into the modal: 

Each img card had a attribute with agent name. Created an event listener that contains a forEach loop into the API to match the data attritbute agent name to the agent name in the API. If true -> several information will be pushed out. 

## Link to Live Site 
https://noshinc346.github.io/ 

### Relevant Instructions
In the agents section, you may click the arrow buttons to slide through cards. Click on any card to learn about the agent and their abilities. You may also swipe on the carousel too. 

## Acknowledgments

Inspiration, code snippets, etc.
* [Valorant Agents Page](https://playvalorant.com/en-us/agents/ )

* [Modal Help](https://nnmcgovern.github.io/ui-pattern/)

