# BTD6 API WRAPPER
A wrapper for the StatsNite [BTD6 API](https://statsnite.com/btd/api).

# Installation
To install:
```
npm install btd6-api-wrapper
```
To import:
```
var btd6Api = require('btd6-api-wrapper')
```
# Docs

### getTowers()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| idOnly | <code>bool</code> | false | Specifies wether to return all towers or only tower ids |

### getTower()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| towerID | <code>string</code> |  | Specifies the id of the tower to return |


### getHeroes()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| idOnly | <code>bool</code> | false | Specifies wether to return all heroes or only hero ids |

### getHero()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| heroID | <code>string</code> |  | Specifies the id of the hero to return |


### getBloons()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| idOnly | <code>bool</code> | false | Specifies wether to return all Bloons or only Bloon ids |

### getBloon()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bloonID | <code>string</code> |  | Specifies the id of the Bloon to return |
