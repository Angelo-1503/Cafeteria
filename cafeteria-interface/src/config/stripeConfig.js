import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51RYxHJQTnG3YHqqoN2I4X0ZoETsHdQBPEbDyZ7GLRwuwbwZk9W8y5iWdrhcjCD2DdbOPUu5YSFksf2je6vzoOK3k005TIuOs6R',
);

export default stripePromise;
