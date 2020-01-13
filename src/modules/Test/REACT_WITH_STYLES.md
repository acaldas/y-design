# react-with-styles

## Pros
- Simple API
- Supports Themes
- Customizable component structure (DOM)
- Props can be passed down
- No funny business i.e. no custom overrides to internal library functions

## Cons
- Necessary to have context provider around (each) design system
- For custom components, necessary to use `useStyles` hook and our own `utils.getComputedStyles`

## Notes
- Only React Hook alternative was tested (there is also the HOC variant)
