<div class="py-8 lg:py-16 px-4 ">
    <h2 class="mb-24 text-2xl lg:text-4xl tracking-wide font-medium text-center">Get in Touch</h2>

    <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        id="staticform"
        class="space-y-8"
    >
        <input type="hidden" name="accessKey" value="a1fc59c5-fb57-459f-b0b8-b0e0c3aef84a" />
        <input type="hidden" name="subject" value="Test from jsfiddle" />
        <input type="hidden" name="redirectTo" value="http://localhost:5173/" />

        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-400"
                >Your email</label
            >
            <input
                type="email"
                id="email"
                class=" text-black text-sm border-b-2   focus:ring-primary-500  focus:ring-2 w-full p-2.5   "
                placeholder="name@flowbite.com"
                required
            />
        </div>
        <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-gray-400 "
                >Subject</label
            >
            <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm   border-b-2  shadow-sm"
                placeholder="Let us know how we can help you"
                required
            />
        </div>
        <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-400 "
                >Your message</label
            >
            <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900  border-b-2 shadow-sm  "
                placeholder="Leave a comment ..."
            />
        </div>
        <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-slate-800 "
            >Send message</button
        >
    </form>
</div>
