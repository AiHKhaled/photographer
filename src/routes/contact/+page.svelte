<div class="container">
    <div class="columns">
        <div class="column is-half">
            <form action="https://api.staticforms.xyz/submit" method="post" id="staticform">
                <!-- Replace with your StaticForms accessKey -->
                <input
                    type="hidden"
                    name="accessKey"
                    value="a1fc59c5-fb57-459f-b0b8-b0e0c3aef84a"
                />
                <input type="hidden" name="subject" value="Test from jsfiddle" />
                <!-- Replace with the url you want to redirect to -->
                <input type="hidden" name="redirectTo" value="https://www.google.com" />
                <div class="field">
                    <label for="name" class="label">Name</label>
                    <div class="control">
                        <input
                            id="name"
                            class="input"
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="email" class="label">Email</label>
                    <div class="control">
                        <input
                            id="email"
                            class="input"
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="message" class="label">Message</label>
                    <div class="control">
                        <textarea
                            class="textarea"
                            name="message"
                            placeholder="Enter Your Message"
                            required
                        />
                    </div>
                </div>
                <button class="button is-primary" type="Submit">Submit</button>
            </form>
        </div>
    </div>
</div>
