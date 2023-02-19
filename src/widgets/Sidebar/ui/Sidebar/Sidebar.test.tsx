import { fireEvent, render, screen, } from '@testing-library/react';
import { Sidebar, } from 'widgets/Sidebar';
import { renderWithTranslation, } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { ComponentRender, } from 'shared/lib/ComponentRender/ComponentRender';

describe('Sidebar', () => {
  test('with only first param', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
