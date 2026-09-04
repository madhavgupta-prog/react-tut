Both API keys are valid (I tested Unsplash and Pexels — both return 200), so the problem isn't the keys. The actual issue is in ResultGrid.jsx:

The bug: On mount, query is '' (empty string, from searchSlice initialState). The useEffect runs immediately with that empty query, so Unsplash gets query= and returns a 400 Bad Request. And since there's no try/catch (and you never dispatch(setError) or dispatch(setLoading)), the error surfaces as an unhandled "fetching" failure in the console.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
