function Redirect() {
    //Get url argument
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    //Shared link will have q as code
    let code = params.q;

    if (code == null) {
        //if no code, redirect to landing page
        window.location = "/wordguess";
    } else {
        //if there is a code try to deep link
        window.location = "unitydl://word?" + code;
    }

}

Redirect();