This is a sample repo to show workarounds for this issue: https://github.com/nrwl/nx/issues/26023


```shell
# Serve both apps
nx run-many -t serve

# Open both apps
open http://localhost:4200/demo1
open http://localhost:4201/demo2
```

You'll see that the basename is set to `/demo1` and `/demo2` respectively.

`demo1` is hardcoding the `basename` prop for the router, whereas `demo2` is defining `process.env.NX_TASK_TARGET_PROJECT` inside its `webpack.config.js` file.
