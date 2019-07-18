import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiLabelGroup',
  mixins: [SemanticUIVueMixin],
  props: {
    circular: {
      type: Boolean,
      description: 'A label group can be circular.',
    },
    color: Enum.Color(),
    size: Enum.Size({
      description: 'A label group can have different sizes.',
    }),
    tag: Enum.Color({
      description: 'A label group can appear as a tags.',
      type: Boolean,
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.color,
          this.size,
          this.circular && 'circular',
          this.tag && 'tag',
          'labels',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiLabel',
  },
};
