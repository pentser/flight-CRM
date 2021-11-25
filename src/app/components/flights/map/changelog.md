
## install @agm/core ,types
- npm i @agm/core --force (to add it to angular 12 not update to this version)
- npm i --save-dev @types/googlemaps@3.39.12   (bug an the last addition? on angular 11)
- npm i agm-direction --force


## open tsconfig.app.json file and update the key "types"
- ["googlemaps"] 

## import {AgmCoreModule} from '@agm/core';

- add the module to imports section :
```
 AgmCoreModule.forRoot({
      apiKey:'your Api Key',
      language: 'he',
    })
```





