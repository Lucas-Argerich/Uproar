import { IconType } from '../../../utils/types';
export default function DiscoveryIcon(props: IconType) {
  return props.isSelected ? (
    <svg width={32} height={33} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m25.493 20.421.427.867c.213.427.76.827 1.213.907l.574.093c1.746.293 2.146 1.573.906 2.827l-.533.533c-.36.36-.547 1.053-.44 1.56l.067.32c.48 2.107-.64 2.92-2.467 1.813l-.387-.24c-.466-.28-1.24-.28-1.706 0l-.387.24c-1.84 1.107-2.947.294-2.467-1.813l.067-.32c.107-.493-.08-1.2-.44-1.56l-.533-.533c-1.24-1.267-.84-2.534.906-2.827l.574-.093c.466-.08 1-.48 1.213-.907l.427-.867c.826-1.666 2.16-1.666 2.986 0Z"
        fill="var(--color-light)"
      />
      <path
        d="M21.587 3.167H10.413c-4.853 0-7.746 2.893-7.746 7.746v11.174c0 4.853 2.893 7.746 7.746 7.746h7.04c.467 0 .8-.48.747-.946a5.459 5.459 0 0 1 .133-1.8c.027-.094 0-.2-.08-.28l-.293-.294c-1.133-1.146-1.547-2.533-1.147-3.8.414-1.253 1.56-2.133 3.147-2.4l.4-.066.36-.72c.733-1.494 1.933-2.36 3.28-2.36 1.347 0 2.547.866 3.28 2.36l.2.413c.093.2.28.333.493.373l.36.08c.467.12 1-.253 1-.746v-8.734c0-4.853-2.893-7.746-7.746-7.746Zm.093 9.28L18.6 16.42a2.276 2.276 0 0 1-1.56.88 2.281 2.281 0 0 1-1.72-.48l-2.44-1.893a.293.293 0 0 0-.253-.067c-.054 0-.147.027-.227.133l-3.173 4.12a1.011 1.011 0 0 1-1.772-.877 1 1 0 0 1 .172-.35l3.173-4.12a2.344 2.344 0 0 1 1.56-.893c.627-.08 1.24.094 1.733.48l2.44 1.92c.094.08.187.067.254.067.053 0 .146-.027.226-.133l3.08-3.974a.984.984 0 0 1 1.4-.173c.454.333.52.96.187 1.387Z"
        fill="var(--color-light)"
      />
    </svg>
  ) : (
    <svg width={32} height={33} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M29.333 17.833V12.5c0-6.667-2.666-9.333-9.333-9.333h-8c-6.667 0-9.333 2.666-9.333 9.333v8c0 6.667 2.666 9.333 9.333 9.333h5.333"
        fill="none"
        stroke="var(--color-light)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="m9.773 19.82 3.174-4.12a1.338 1.338 0 0 1 1.88-.24l2.44 1.92a1.349 1.349 0 0 0 1.88-.227l3.08-3.973m3.746 8.413.374.76c.186.374.653.72 1.066.8l.507.08c1.52.254 1.88 1.374.787 2.48l-.467.467c-.307.32-.48.933-.387 1.36l.067.28c.413 1.84-.56 2.547-2.16 1.587l-.347-.2c-.413-.24-1.08-.24-1.493 0l-.347.2c-1.613.973-2.586.253-2.16-1.587l.067-.28c.093-.427-.08-1.04-.387-1.36l-.466-.467c-1.094-1.106-.734-2.226.786-2.48l.507-.08c.4-.066.88-.426 1.067-.8l.373-.76c.72-1.453 1.893-1.453 2.613 0Z"
        fill="none"
        stroke="var(--color-light)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
}
