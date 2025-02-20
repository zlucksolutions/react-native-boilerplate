import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@shared/theme/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@shared/store/rootReducer';
import { fetchPostsStart, fetchAlbumsStart } from '../store/postsSlice';
import { Card } from '@shared/components/Card';
import { showToast } from '@shared/components/Toast';

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { 
    posts: { items: posts, loading: postsLoading, error: postsError },
    albums: { items: albums, loading: albumsLoading, error: albumsError }
  } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsStart());
    dispatch(fetchAlbumsStart());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchPostsStart());
    dispatch(fetchAlbumsStart());
  };

  const renderSection = (
    title: string,
    data: any[],
    loading: boolean,
    error: string | null,
    renderItem: (item: any) => React.ReactElement
  ) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
        {title}
      </Text>
      {error ? (
        <Text style={[styles.error, { color: theme.colors.error }]}>
          {error}
        </Text>
      ) : (
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            loading ? (
              <View style={styles.centered}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
              </View>
            ) : null
          }
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      refreshControl={
        <RefreshControl
          refreshing={postsLoading || albumsLoading}
          onRefresh={handleRefresh}
          tintColor={theme.colors.primary}
        />
      }>
      {renderSection(
        t('Recent Posts'),
        posts,
        postsLoading,
        postsError,
        (item) => (
          <Card
            variant="elevated"
            style={styles.card}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              {item.title}
            </Text>
            <Text
              style={[styles.body, { color: theme.colors.text }]}
              numberOfLines={3}>
              {item.body}
            </Text>
          </Card>
        )
      )}

      {renderSection(
        t('Albums'),
        albums,
        albumsLoading,
        albumsError,
        (item) => (
          <Card
            variant="elevated"
            style={styles.albumCard}>
            <Text style={[styles.title, { color: theme.colors.text }]} onPress={()=>{
              showToast('success', 'Success!')
            }}>
              {item.title}
            </Text>
          </Card>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 12,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  card: {
    width: 300,
    marginRight: 16,
    padding: 16,
  },
  albumCard: {
    width: 250,
    marginRight: 16,
    padding: 16,
    aspectRatio: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
  error: {
    fontSize: 16,
    textAlign: 'center',
    margin: 16,
  },
}); 