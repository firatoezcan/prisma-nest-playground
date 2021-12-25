sed -i -E -- 's/(:.*?\|).*?(From|To)JSON/:/g' ./openapi/models/*.ts
sed -i -- 's/GlobalFetch/WindowOrWorkerGlobalScope/g' ./openapi/runtime.ts
