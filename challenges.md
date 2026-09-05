Both API keys are valid (I tested Unsplash and Pexels — both return 200), so the problem isn't the keys. The actual issue is in ResultGrid.jsx:

The bug: On mount, query is '' (empty string, from searchSlice initialState). The useEffect runs immediately with that empty query, so Unsplash gets query= and returns a 400 Bad Request. And since there's no try/catch (and you never dispatch(setError) or dispatch(setLoading)), the error surfaces as an unhandled "fetching" failure in the console.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Your collectionSlice.js exports removeFromCollection — there is no removeItem. An import of a non-existent export throws at module load time, which kills the whole React tree → blank screen.

removetoast/addtoast reducers don't change state: they're defined as ()=>{...} which returns , resetting state.items to nothing. Your toasts will still fire (side effect), but each one wipes the collection state in Redux (though localStorage keeps the visual list until reload). Cleaner approach: call toast.success(...) directly in the component instead of dispatching, and dispatch only removeFromCollection.
ResultGrid.jsx destructures error but never uses setError's effect incorrectly — that's fine, just noting I checked it.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>